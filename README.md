Walter
======

Walter is a mpd client. Why another mpd client? I wanted one that I could
control from any browser, and that I could run with just one command. The
http clients out there seem to be largely php. The one python library I saw
was Django-based, which seemed a bit heavy.

Walter uses [Aspen](http://aspen.io/) and provides a minimalistic interface.

To install, create a virtualenv and install the two requirements:

```bash
virtualenv --distribute -p python2.7 venv
source venv/bin/activate
pip install -f requirements.txt 
 ```

 To run:
 cd www
 aspen

 visit http://localhost:8080/
