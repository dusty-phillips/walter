import mpd
def get_client(request):
    client = mpd.MPDClient()
    client.connect("localhost", 6600)
    client.password(request.cookie.get("auth_pwd").value)
    # FIXME: deal with not authenticated
    return client