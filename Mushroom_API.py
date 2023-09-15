from flask import Flask, jsonify
from flask_cors import CORS
import tensorflow as tf
app = Flask(__name__)
CORS(app)

model = tf.keras.saving.load_model('mushroom.model')
categories = ['Edible', 'Poisonous']

@app.route('/')
def home():
    """Mushroom API"""
    return (
        f'/api/model'
    )

@app.route('/api/model/<mushroom>')
def mushroom_model(mushroom):
    mushroom_prediction = list(map(int, mushroom.split('-')))
    prediction = model.predict([mushroom_prediction])
    return jsonify(int(prediction))

if __name__ == '__main__':
    app.run(debug = True)