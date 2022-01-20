# importações
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import os
from flask_cors import CORS # permitir back receber json do front

# flask
app = Flask(__name__)
CORS(app) # aplicar o cross domain

#Caminho do arquivo de banco de dados
path = os.path.dirname(os.path.abspath(__file__))
arquivobd = os.path.join(path, 'pokemon.db')

# sqlalchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///pokemon.db"

#Remoção de Warnings
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

