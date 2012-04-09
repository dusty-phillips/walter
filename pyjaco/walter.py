class Player:
    def play(self):
        post("/play.html", {"some": "arg"})
player = Player()


def setup():
    click(".play", player.play)


@JSVar("jQuery")
def click(selector, func):
    jQuery(js(selector)).click(js(func))

@JSVar("jQuery")
def post(url, params={}, func=None):
    jQuery.post(js(url), js(params), js(func))

jQuery(js(setup))
