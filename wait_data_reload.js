'use strict';

(function () {
    $(document).ready(function () {
        tableau.extensions.initializeAsync().then(function () {
            const dashboard = tableau.extensions.dashboardContent.dashboard;

            // データソースを取得
            dashboard.getDataSourcesAsync().then(dataSources => {
                let refreshPromises = dataSources.map(ds => ds.refreshAsync());
                // 全データソースをリフレッシュ
                Promise.all(refreshPromises).then(() => {
                    // 初期処理完了後に UI 切り替え
                    $('#loading-screen').hide();
                    $('#main-content').show();
          
                    console.log('データの初期化が完了しました');
                });
            });
        });
    })
})();