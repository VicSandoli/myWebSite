/**
 * Created by victo on 18/09/2016.
 */
class MenuController {

    toogleSideMenu() {
        $("#menu-toggle").on("click", function (event) {
            event.preventDefault();
            $("#wrapper").toggleClass("toggled");
        })
    }

}