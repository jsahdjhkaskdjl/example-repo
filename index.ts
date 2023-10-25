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
let position = new Vector2(400,400)

EventsSDK.on("Draw", () => {

	if ( Enable.value == true)
	{	

		const MyHero = LocalPlayer?.Hero?.Name

		if ( InputManager.IsMouseKeyDown(0x01)){
			position = InputManager?.CursorOnScreen
		}
		
		console.log(position)

		RendererSDK.OutlinedRect(position ,new Vector2(100,100))

		RendererSDK.Image(
			`panorama/images/heroes/icons/${MyHero}_png.vtex_c`,
			position,
			0,
			new Vector2(100,100),
			new Color(255, 255, 255, 255)
		)	
	}

})

