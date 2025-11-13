import http.server
import socketserver
from functools import partial

PORT = 8000
DIRECTORY = r"C:\Users\Tsyri\OneDrive\Desktop\html"  # <-- Deinen Pfad hier eintragen

Handler = partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving {DIRECTORY} at http://0.0.0.0:{PORT}")
    httpd.serve_forever()
