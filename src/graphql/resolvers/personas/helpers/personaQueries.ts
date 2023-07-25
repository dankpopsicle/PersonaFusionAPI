export const getPersonasQuery = (where: string, order: string, limit: string) => {
  return `
    SELECT p.*,
      array_agg(
        json_build_object('level', ps.level, 'skill', 
          json_build_object('cost', s.cost, 'effect', s.effect,
            'name', s.name, 'skill_id', s.skill_id, 'type',
            s.type
          )
        )
      ) as skills,
      json_build_object(
        'cost', s_normal.cost, 'effect', s_normal.effect, 'name',
        s_normal.name, 'skill_id', s_normal.skill_id, 'type', 
        s_normal.type
      ) as normal_skill_card, 
      json_build_object(
        'cost', s_fusion.cost, 'effect', s_fusion.effect, 'name',
        s_fusion.name, 'skill_id', s_fusion.skill_id, 'type', 
        s_fusion.type
      ) as fusion_alarm_skill_card, 
      json_build_object(
        'name', i_normal.name, 'description', i_normal.description,
        'item_id', i_normal.item_id
      ) as normal_item,
      json_build_object(
        'name', i_fusion.name, 'description', i_fusion.description,
        'item_id', i_fusion.item_id
      ) as fusion_alarm_item,
      json_build_object(
        'strength', p_stats.strength, 'magic', p_stats.magic,
        'endurance', p_stats.endurance, 'agility', p_stats.agility,
        'luck', p_stats.luck
      ) as stats,
      json_build_object(
        'phys', p_aff.phys, 'gun', p_aff.gun, 'fire', p_aff.fire,
        'ice', p_aff.ice, 'elec', p_aff.elec, 'wind', p_aff.wind,
        'psy', p_aff.psy, 'nuke', p_aff.nuke, 'bless', p_aff.bless,
        'curse', p_aff.curse
      ) as affinities,
      json_build_object(
        'name', t.name, 'description', t.description, 
        'category', t.category
      ) as trait
    FROM personas p
    LEFT JOIN persona_skills ps
      ON ps.persona_id = p.persona_id
    LEFT JOIN items i_normal
      ON p.normal_item_id = i_normal.item_id
    LEFT JOIN items i_fusion
      ON p.fusion_alarm_item_id = i_fusion.item_id
    LEFT JOIN skills s
      ON ps.skill_id = s.skill_id
    LEFT JOIN skills s_normal
      ON p.normal_skillcard_id = s_normal.skill_id
    LEFT JOIN skills s_fusion
      ON p.fusion_alarm_skillcard_id = s_fusion.skill_id
    LEFT JOIN persona_affinities p_aff
      ON p_aff.persona_id = p.persona_id
    LEFT JOIN persona_stats p_stats
      ON p_stats.persona_id = p.persona_id
    LEFT JOIN traits t
      ON p.trait_id = t.trait_id
    ${where}
    GROUP BY 
      p.persona_id, 
      s_normal.skill_id, 
      i_normal.item_id,
      s_fusion.skill_id, 
      i_fusion.item_id,
      p_aff.persona_affinities_id,
      p_stats.persona_stats_id,
      t.trait_id
    ${order}
    ${limit}
  `
}

export const specialPersonaQuery = `
  SELECT persona_id
  FROM special_personas
  WHERE array_length(fusion_ids, 1) = 2
    AND $1 = ANY(fusion_ids)
    AND $2 = ANY(fusion_ids)
`

export const basicPersonaQuery = `
  SELECT base_level, arcana, treasure, name, persona_id
  FROM personas
  WHERE persona_id = $1
`

export const treasureModifierQuery = (arcana: string, treasureId: number) => `
  SELECT ${arcana.toLowerCase()}_mod
  FROM treasure_modifiers
  WHERE persona_id = ${treasureId}
`

export const standardFusionQuery = `
  SELECT persona_id
  FROM personas
  WHERE arcana = $1 
    AND base_level >= $2
    AND (dlc = $3 OR dlc = false)
    AND special = false
    AND persona_id != $4
    AND persona_id != $5
  ORDER BY base_level
  LIMIT 1
`

export const basicPersonasByArcanaQuery = `
  SELECT base_level, persona_id, name, arcana, treasure
  FROM personas
  WHERE arcana = $1
    AND (dlc = $2 OR dlc = false)
  ORDER BY base_level
`

export const treasuresQuery = (arcana: string) => `
  SELECT p.persona_id, p.name, p.arcana, 
    p.treasure, 
    ${`${arcana.toLowerCase()}_mod`} as modifier
  FROM personas p
  JOIN treasure_modifiers t
    ON t.persona_id = p.persona_id
  WHERE treasure = true
`

export const dlcList = `
  SELECT persona_id
  FROM personas
  WHERE dlc = true
`