// 画像が選択されたときにプレビューを表示する関数
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

// 検出結果（仮のYOLO検出結果として食材を設定）
const detectedItems = ["トマト", "きゅうり", "たまねぎ"]; // 仮の検出結果

// 検索ボタンが押されたときにクックパッドで検索する関数
document.getElementById('upload-button').addEventListener('click', function (e) {
    e.preventDefault(); // デフォルトのフォーム送信を防止

    // 検出された食材のリストを結合して検索キーワードを作成
    const searchQuery = detectedItems.join(' ');

    // クックパッドの検索URLを作成
    const searchUrl = `https://cookpad.com/search/${encodeURIComponent(searchQuery)}`;

    // 新しいタブで検索結果を開く
    window.open(searchUrl, '_blank');
});
