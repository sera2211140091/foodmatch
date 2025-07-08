from flask import Flask, request, render_template
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import os

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # 画像ファイルを取得
        file = request.files.get("image")
        if file:
            # ファイルを保存
            filepath = os.path.join("uploads", file.filename)
            file.save(filepath)

            # YOLOで物体検出を行う（モック処理として野菜名を仮設定）
            detected_items = ["トマト", "きゅうり"]  # 仮の検出結果

            # クックパッドで検索を実行
            search_query = " ".join(detected_items)
            open_cookpad(search_query)

            return f"以下を検索しました: {search_query}"

    return render_template("index.html")

def open_cookpad(search_query):
    # Seleniumでクックパッドを開いて検索
    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)  # ブラウザを閉じない
    driver = webdriver.Chrome(options=options)

    # クックパッドを開く
    driver.get("https://cookpad.com/")
    search_box = driver.find_element(By.NAME, "keyword")  # 検索ボックスの要素
    search_box.send_keys(search_query)  # 検索クエリを入力
    search_box.send_keys(Keys.RETURN)  # Enterキーを押す

if __name__ == "__main__":
    app.run(debug=True)
