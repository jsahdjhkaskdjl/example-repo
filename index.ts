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


		let cursor_pos = InputManager?.CursorOnScreen; 

		if ( InputManager.IsMouseKeyDown(0x01) && position?.x < cursor_pos?.x && position?.y < cursor_pos?.y && cursor_pos?.x < position?.x + 50 && cursor_pos?.y < position?.y + 50 ){
			position = InputManager?.CursorOnScreen
		};

		const MyHero = LocalPlayer?.Hero?.Name;
		RendererSDK.Image(`panorama/images/heroes/icons/${MyHero}_png.vtex_c`,
			position,
			0,
			new Vector2(50,50),
			new Color(255, 255, 255, 255)
		);
	};
});

