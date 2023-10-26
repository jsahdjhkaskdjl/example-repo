import {
	EventsSDK,
	Menu,
	Vector2,
	RendererSDK,
	Color,
	LocalPlayer,
	InputManager
} from "github.com/octarine-public/wrapper/index"

const Entry = Menu.AddEntry("Utility");
const testTask = Entry.AddNode(
	"Тестовое задание",
	undefined,
	undefined,
	0
);

const Enable = testTask.AddToggle("State");
let position = new Vector2(400,400);

EventsSDK.on("Draw", () => {

	if ( Enable.value == true)
	{	


		let test1 = new Vector2(40,40);
		let test2 = new Vector2(45,45);
		// let test3 = new Vector2(50,50);
		console.log(test1.x.valueOf)

		const MyHero = LocalPlayer?.Hero?.Name;
		console.log(position.Ceil);
		if ( InputManager.IsMouseKeyDown(0x01) ){
			position = InputManager?.CursorOnScreen
		};

		RendererSDK.Image(`panorama/images/heroes/icons/${MyHero}_png.vtex_c`,
			position,
			0,
			new Vector2(50,50),
			new Color(255, 255, 255, 255)
		)	;
	}
});

