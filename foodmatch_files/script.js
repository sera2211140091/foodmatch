// 画像が選択されたときだけレシピを検索する
function previewImage() {
    var fileInput = document.getElementById('input_image');
    var previewImg = document.getElementById('preview');
    var uploadButton = document.getElementById('upload-button');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
            uploadButton.disabled = false;
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        previewImg.src = '';
        previewImg.style.display = 'none';
        uploadButton.disabled = true;
    }
}

// result.htmlでページ切り替えの処理をする
var recipes = document.getElementsByClassName("recipe");
if (recipes.length > 0) {
    var recipeIndex = 0;

    function showRecipe() {
        for (var i = 0; i < recipes.length; i++) {
            recipes[i].style.display = "none";
        }
        recipes[recipeIndex].style.display = "block";
    }

    function prevRecipe() {
        if (recipeIndex > 0) {
            recipeIndex--;
        } else {
            recipeIndex = recipes.length - 1;
        }
        showRecipe();
    }

    function nextRecipe() {
        if (recipeIndex < recipes.length - 1) {
            recipeIndex++;
        } else {
            recipeIndex = 0;
        }
        showRecipe();
    }

    showRecipe();
}

// レシピ検索ボタンのイベントリスナーを追加
document.getElementById('upload-button').addEventListener('click', function () {
    // 検索キーワードを取得
    const keyword = document.getElementById('input_image').value.split('\\').pop(); // 画像ファイル名を取得

    // クックパッドの検索URLを生成
    const searchUrl = `https://cookpad.com/uk${"keyword"}`;

    // 新しいタブで検索URLを開く
    window.open(searchUrl, '_blank');
});
