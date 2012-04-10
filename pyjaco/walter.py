class Player:
    def play(self):
        post("/play.html", {"some": "arg"}, self.update_status)

    def update_status(self, text):
        text = py(text)
        html('#status', text)

    def get_status(self):
        get("/status.html", self.update_status)

player = Player()

@JSVar("window")
def setup():
    click(".play", player.play)
    window.setInterval(js(player.get_status), js(3000))

@JSVar("jQuery")
def click(selector, func):
    jQuery(js(selector)).click(js(func))

@JSVar("jQuery")
def html(selector, text):
    jQuery(js(selector)).html(js(text))

@JSVar("jQuery")
def post(url, params={}, func=None):
    jQuery.post(js(url), js(params), js(func))

@JSVar("jQuery")
def get(url, func=None):
    jQuery.get(js(url), js(func))

jQuery(js(setup))
