import {
	EventsSDK,
	Menu,
	Vector2,
	RendererSDK,
	Color
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
	if (Enable.value == true){


		const vectorSize = new Vector2(100, 100)

		const position = new Vector2(300, 300)

		RendererSDK.FilledRect(position, vectorSize, Color.Yellow.SetA(255))
	}


})