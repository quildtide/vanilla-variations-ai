var VAIVLoaded;

if (!VAIVLoaded) {
    VAIVLoaded = true;

    try {
        var aiPersonalities = model.aiPersonalities();

        aiPersonalities.V_Arcturus_V = {
            name: "V_Arcturus_V",
            display_name: '!LOC:V_Arcturus_V',
            percent_vehicle: 0.20,
            percent_bot: 0.10,
            percent_air: 0.05,
            percent_naval: 0.40,
            percent_orbital: 0.25,
            personality_tags:
                [
                    "Default",
                    "PreventsWaste"
                ],
            metal_drain_check: 0.4,
            energy_drain_check: 0.85,
            metal_demand_check: 0.71,
            energy_demand_check: 0.9,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.35,
            unable_to_expand_delay: 0,
            per_expansion_delay: 0,
            factory_build_delay_min: 0,
            adv_eco_mod: 1.5,
            adv_eco_mod_alone: 0.6,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 1.0,
            fabber_alone_on_planet_mod: 2.0,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 0,
            max_advanced_fabbers: 30,
            starting_location_evaluation_radius: 400
        }


        aiPersonalities.v_betelgeuse_v = _.assign(
            _.clone(aiPersonalities.V_Arcturus_V),
            {
                name: "V_Betelgeuse_V",
                display_name: '!LOC:V_Betelgeuse_V',
                percent_open_bot: 1
            }
        )

        aiPersonalities.V_Canopus_V = _.assign(
            _.clone(aiPersonalities.Absurd),
            {
                name: "V_Canopus_V",
                display_name: '!LOC:V_Canopus_V',
                percent_open_bot: 1,
                percent_vehicle: 0.20,
                percent_bot: 0.10,
                percent_air: 0.05,
                percent_naval: 0.40,
                percent_orbital: 0.25
            }
        )

        model.aiPersonalities.valueHasMutated();

    } catch (e) {
        console.error(e);
        console.error(JSON.stringify(e));
    }
}