from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)


    myArr = ["Bread", "Milk", "Bananas", "Orange", "Eggs"]
    print(myArr[0]) # Bread
    print(myArr[3]) # Orange
    print(myArr[-1]) # Eggs
    myArr[0] = "Milk"
    print(myArr) #["Milk", "Milk", "Bananas", "Orange", "Eggs"]

    