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
	"Тестовое задание",
	undefined,
	undefined,
	0
)

const Enable = testTask.AddToggle("State")

EventsSDK.on("GameStarted", () => {
	console.log(Enable.value)
})