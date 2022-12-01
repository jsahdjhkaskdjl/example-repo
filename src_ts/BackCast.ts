import {
	Ability,
	dotaunitorder_t,
	Entity,
	EventsSDK,
	LocalPlayer,
	Menu as MenuSDK
} from "github.com/octarine-public/wrapper/index"

const Abilities: string[] = [
	"pudge_meat_hook",
	"windrunner_powershot",
	"death_prophet_carrion_swarm",
	"vengefulspirit_wave_of_terror",
	"rattletrap_hookshot",
	"mirana_arrow",
	"queenofpain_sonic_wave",
	"keeper_of_the_light_illuminate",
	"drow_ranger_wave_of_silence",
	"dragon_knight_breathe_fire",
	"nyx_assassin_impale",
	"earthshaker_fissure",
	"shredder_timber_chain",
	"jakiro_ice_path",
	"venomancer_venomous_gale",
	"weaver_the_swarm",
	"invoker_deafening_blast",
	"invoker_tornado",
	"jakiro_dual_breath",
	"jakiro_macropyre",
	"lina_dragon_slave",
	"lion_impale",
	"snapfire_scatterblast",
	"magnataur_shockwave",
	"phoenix_icarus_dive",
	"puck_illusory_orb",
	"shadow_demon_shadow_poison",
	"spectre_spectral_dagger",
	// "tidehunter_gush", // TODO: aghs only
	"tinker_march_of_the_machines",
	"ancient_apparition_ice_blast",
	"troll_warlord_whirling_axes_ranged",
	"earth_spirit_rolling_boulder",
	"elder_titan_earth_splitter"
]
const Menu = MenuSDK.AddEntryDeep(["Examples", "Utility", "Back Cast"])
const State = Menu.AddToggle("Enable")
const StateMiltiUnit = Menu.AddDropdown("Multi units", ["Only your hero", "All Heroes"], 0)
const SuppAbils = Menu.AddImageSelector("Ability", Abilities, new Map(Abilities.map(name => [name, true])))
EventsSDK.on("PrepareUnitOrders", order => {
	if (
		!State.value ||
		(StateMiltiUnit.SelectedID !== 1 && order.Issuers[0] !== LocalPlayer!.Hero) ||
		order.OrderType === dotaunitorder_t.DOTA_UNIT_ORDER_TRAIN_ABILITY
	) {
		return true
	}
	const abil = order.Ability_
	if (abil === undefined || !(abil instanceof Ability) || !SuppAbils.IsEnabled(abil.Name)) {
		return true
	}
	const targetPos = order.Target instanceof Entity ? order.Target.Position : order.Position
	order.Issuers[0]?.CastPosition(abil, order.Issuers[0].Position.Extend(targetPos, 1.3))
	return false
})
