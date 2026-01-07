from flask import Flask, render_template, jsonify, request
import json
import random

app = Flask(__name__)

def load_cards():
    with open("cards.json", "r", encoding="utf-8") as f:
        return json.load(f)

def save_cards(cards):
    with open("cards.json", "w", encoding="utf-8") as f:
        json.dump(cards, f, indent=2, ensure_ascii=False)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/deck/<level>")
def deck(level):
    return render_template("deck.html", level=level)

@app.route("/api/cards/<level>")
def get_cards(level):
    cards = load_cards()
    filtered = [c for c in cards if c["level"] == level]

# Lower ease = higher priority
    filtered.sort(key=lambda c: c["ease"])

    return jsonify(filtered)

@app.route("/api/update", methods=["POST"])
def update_card():
    data = request.json
    card_id = data["id"]
    known = data["known"]

    cards = load_cards()

    for card in cards:
        if card["id"] == card_id:
            if known:
                card["ease"] = min(card["ease"] + 0.3, 5.0)
            else:
                card["ease"] = max(card["ease"] - 0.4, 1.3)

            break

    save_cards(cards)
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(debug=True)
