import {
	EntityManager,
	EventsSDK,
	GameState,
	item_blink,
	LocalPlayer,
	Menu,
	monkey_king_tree_dance,
	ParticleAttachment,
	ParticlesSDK,
	TickSleeper,
	Vector3
} from "github.com/octarine-public/wrapper/index"


const Entry = Menu.AddEntry("Utility")
const testTask = Entry.AddNode(
	"test 123123",
	"panorama/images/spellicons/monkey_king_tree_dance_png.vtex_c",
	undefined,
	0
)

EventsSDK.on("GameStarted", () => {
	console.log("LocalPlayer")
})
