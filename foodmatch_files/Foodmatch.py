<!DOCTYPE html>
<!-- saved from url=(0032)https://foodmatch.onrender.com/ -->
<html lang="ja"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Foodmatch</title>
    <link rel="stylesheet" type="text/css" href="./foodmatch_files/style.css">
  </head>
  
  <body>
    <div class="main">
      <!--画面左側-->
      <div class="left-panel">
        <img src="./foodmatch_files/logo.png" alt="Foodmatch">
        <h1>冷蔵庫内の画像からレシピを提案</h1>
        <p>画像を選択してください</p>
        <form id="upload-form" method="post" enctype="multipart/form-data" action="https://foodmatch.onrender.com/result">
          <div class="center-button">
            <input type="file" accept="image/*" id="input_image" name="file" onchange="previewImage()">
            <div class="image-container">
              <img src="https://foodmatch.onrender.com/" id="preview" alt="選択された画像" style="display:none;">
            </div>
            <button type="submit" id="upload-button" disabled="">レシピを検索</button>
          </div>
        </form>
      </div>

      <!--画面右側-->
      <div class="right-panel">
        <div class="background-image">
          <div class="gradient-overlay"></div>
          <img src="./foodmatch_files/img.jpg" alt="料理">
        </div>        
      </div>

    </div>

    <div class="footer">@2024 Foodmatch</div>
    <script src="./foodmatch_files/script.js.ダウンロード"></script>
  
</body></html>