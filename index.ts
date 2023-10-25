import {
	EventsSDK,
	Menu,
	Vector2,
	RendererSDK,
	Color,
	LocalPlayer,
	InputManager
} from "github.com/octarine-public/wrapper/index"

const Entry = Menu.AddEntry("Utility")
const testTask = Entry.AddNode(
	"Тестовое задание",
	undefined,
	undefined,
	0
)

const Enable = testTask.AddToggle("State")

EventsSDK.on("Draw", () => {
	if ( Enable.value == true)
	{	
		let position = new Vector2(500,500)
		const Cursor = InputManager?.CursorOnScreen
		const MyHero = LocalPlayer?.Hero?.Name

		RendererSDK.Image(
			`panorama/images/heroes/icons/${MyHero}_png.vtex_c`,
			Cursor,
			0,
			new Vector2(300,300),
			new Color(255, 255, 255, 255)
		)	

		





	}

})

