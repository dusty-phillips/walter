import mpd
def get_client(request):
    client = mpd.MPDClient()
    client.connect("localhost", 6600)
    client.password(request.cookie.get("auth_pwd").value)
    # FIXME: deal with not authenticated
    return client

def get_status_line(client):
    status = client.status()
    if status['state'] != 'play':
        return status['state'].capitalize()
    else:
        song_id = status['songid']
        song_info = client.playlistinfo(song_id)
        return "%(artist)s - %(title)s" % song_info[0]