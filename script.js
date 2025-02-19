// 網頁開啟時，取得股票資訊
window.onload = function() {
    // 未獲取時顯示 loading
    document.getElementById('predictionResult').innerHTML = `<p>Loading...</p>`;
    getPrediction();
}


//### Tomorrow's Predicted Stock Price for 0050: 168.50 TWD #### RSV based on 9 days: - Calculation formula: (today's closing price - the lowest price in the past 9 days) / (the highest price in the past 9 days - the lowest price in the past 9 days) * 100 - RSV = 100 * (166.65 - 149.50) / (167.85 - 149.50) = 94.97 #### 20-day average volume: - Calculation formula: => the number of shares traded within 20 days / 20 - 20-day average volume = (6,666,498 + 5,935,465 + 9,032,607 + 6,699,483 + 6,345,930 + 5,285,856 + 10,192,376 + 9,642,900 + 8,291,028 + 4,792,141 + 8,135,962 + 6,054,296 + 5,279,800 + 8,082,060 + 5,718,650 + 9,992,734 + 33,785,973 + 6,903,163 + 8,077,871 + 18,674,686) / 20 = 8,870,927 #### Today's K value and D value: - Yesterday's K value: 87.5990 - Yesterday's D value: 89.0399 - Today's K value: (94.97 + 87.5990 * 8) / 9 = 88.9366 - Today's D value: (88.9366 + 89.0399 * 8) / 9 = 89.1189 ### News Information of Top 5 Companies in Terms of 0050 Share in the Past 2 Days: 1. **台積電 (TSMC)** - News: 台積電宣布將在熊本縣興建第3座工廠，並計畫在今年夏天拜訪台積電台灣總部。 - Main Customers: Apple, Nvidia, AMD - Customer News: Apple將推出全新AI處理器M4，Nvidia與台積電合作開發AI晶片。 2. **鴻海 (Foxconn)** - News: 鴻海董事長劉揚偉表示，鴻海將持續支持夏普，幫助其突破困境。 - Main Customers: Apple, Sony, Microsoft - Customer News: Apple將推出全新AI處理器M4，Sony宣布股票分割及庫藏股買回計畫。 3. **聯發科 (MediaTek)** - News: 聯發科宣布將推出新一代5G晶片，並計畫在2025年初發表。 - Main Customers: Xiaomi, Oppo, Vivo - Customer News: Xiaomi計畫推出新款5G手機，Oppo與Vivo持續擴展海外市場。 4. **廣達 (Quanta)** - News: 廣達宣布將擴大AI伺服器產能，並預計今年AI伺服器營收將有雙位數增幅。 - Main Customers: Apple, Google, Amazon - Customer News: Apple將推出全新AI處理器M4，Google計畫在I/O開發者大會上展示AI技術，Amazon與OpenAI合作開發AI搜尋引擎。 5. **台達電 (Delta)** - News: 台達電宣布將擴大再生能源投資，並計畫在未來三年內增加50%的再生能源產能。 - Main Customers: Tesla, Ford, General Motors - Customer News: Tesla計畫推出新款電動車，Ford與General Motors持續擴展電動車市場。 ### Analysis Suggestions: - Based on the analysis points provided and the technical analysis, as well as the current news and trends: - **Buy Point**: If KD value has a golden cross, indicating a bullish trend. - **Sell Point**: If KD value has a death cross, indicating a bearish trend. - **Continue to Observe**: If KD value is between 20 and 90, and the daily average volume is greater than the 20-day average volume. - **High-end Oscillation**: If KD value is greater than 80, and the daily average volume is greater than the 20-day average volume. Based on the current KD values and the analysis, the suggestion is 'High-end oscillation'.
function formateData(date) {
    // 將開頭的 '###' 移除
    date = date.replace(/###/, '');
    // 將 '####' 轉換為 '<br><br>
    date = date.replace(/####/g, '<br><br>');
    // 將 '###' 轉換為 '<br><br>'
    return date.replace(/###/g, '<br><br>');
}

function getPrediction() {
    console.log("get prediction");
    var stockNo = ['2330','00881','00878','00933B',];
    let resultHtml = "";
    var resultElement = document.getElementById('predictionResult');
    // call the server to get the prediction data
    stockNo.forEach(function(stockNo) {
        fetch('https://jackyleeideapi.azurewebsites.net/get_stock_info_prediction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ stockNo: stockNo})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // 若有資料
            if (data.length > 0) {
                // 顯示股票資訊 ChatGPT4o Stock Prediction
                resultHtml += `<h2>${data[0]['stock_no']} Prediction</h2>`;
                resultHtml += `<p>${formateData(data[0]['stock_info'])}</p>`;
                resultElement.innerHTML = resultHtml;
            }
        })
        .catch(error => {
            resultElement.innerHTML = `<p>The webpage is currently undergoing maintenance...</p>`;
            console.log('Error:', error);
        });
    });
    
}
