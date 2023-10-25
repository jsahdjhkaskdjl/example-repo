import {
	EventsSDK,
	Menu,
	Vector2,
	RendererSDK,
	Color,
	LocalPlayer,
	Hero
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
		const MyHero = LocalPlayer?.Hero?.Name
		const vectorSize = new Vector2(100, 100)
		const position = new Vector2(300, 300)
		//RendererSDK.FilledCircle(position, vectorSize, Color.Yellow.SetA(255))

		RendererSDK.Image(
			`panorama/images/heroes/icons/${MyHero}_png.vtex_c`,
			position,
			0,
			vectorSize,
			new Color(255, 255, 255, 255)
		)	
	}

})

