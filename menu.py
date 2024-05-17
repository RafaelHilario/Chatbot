from flask import Flask, render_template
import datetime
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/bot')
def bot():
    return render_template('bot.html')
@app.route('/arquivo')
def arquivo():
    return render_template('arquivo.html')
@app.get('/response-robot')
def robot():
    date = datetime.datetime.now().strftime("%d/%m/%y %H:%M")
    return f"A data de hoje é {date} "
if __name__ == '__main__':
    app.run(debug=True)

