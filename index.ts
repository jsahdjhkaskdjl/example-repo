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
	Vector3,
	Vector2,
	RendererSDK,
	Color
} from "github.com/octarine-public/wrapper/index"

export interface IBaseDrawable {
	Key: any
	IsVisible: boolean
	PlayerColor: Color
	Position: () => Vector3
}

const Entry = Menu.AddEntry("Utility")
const testTask = Entry.AddNode(
	"Тестовое задание",
	undefined,
	undefined,
	0
)

const Enable = testTask.AddToggle("State")

EventsSDK.on("GameStarted", () => {
	if (Enable.value == true){


		const vectorSize = new Vector2(100, 100)

		const position = new Vector2(300, 300)

		RendererSDK.FilledCircle(position, vectorSize, Color.Yellow.SetA(255))
	}


})