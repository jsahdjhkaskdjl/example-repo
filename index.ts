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
		const Cursor = InputManager?.CursorOnScreen
		const MyHero = LocalPlayer?.Hero?.Name
		console.log(Cursor)
		RendererSDK.Image(
			`panorama/images/heroes/icons/${MyHero}_png.vtex_c`,
			new Vector2(100, 100),
			0,
			new Vector2(100, 100),
			new Color(255, 255, 255, 255)
		)	
	}

})

