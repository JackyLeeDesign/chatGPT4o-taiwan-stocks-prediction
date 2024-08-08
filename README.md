# Taiwan-Stock-Prediction-App 📈

Welcome to the `Taiwan-Stock-Prediction-App` repository! This web application is designed to provide deep analytical insights into the Taiwanese stock market, with a special focus on prominent stocks such as TSMC and the Taiwan 50 ETF. Utilizing cutting-edge algorithms, it processes extensive stock data and news to deliver impactful analysis on the semiconductor industry and AI sector advancements. Our predictive models are at the core of the app, offering estimations on stock trends and actionable trading recommendations.

[LINK](https://jackyleedesign.github.io/chatGPT4o-taiwan-stocks-prediction/)

![image](https://raw.githubusercontent.com/JackyLeeDesign/chatGPT4o-taiwan-stocks-prediction/main/demo.png)

## 🚨 Important Disclaimer:
Please note that investing in stocks carries inherent risks, including the potential for loss. The creators of this website will not be held responsible for any financial outcomes. All content provided herein is for educational purposes only. We strongly advise users to perform thorough research and exercise caution when making investment decisions.

---

# Define prompt for GPT-4 🤖
The following prompt was crafted to interact with GPT-4, aiming to simulate a scenario where a financial analyst (played by GPT-4) provides stock price predictions and technical analysis:

```python
# Define prompt for GPT-4  
prompt = (  
    f"You are a financial analyst, and I am your client. This is important to me. Predicting failure will result in a loss of my trust. Your job is to provide me with insightful stock predictions and analysis.\n\n"  
    f"Here is the relevant data:\n"  
    f"1. Stock price data: {formatted_stock_data}\n"  
    f"2. Industry share: {stock_industry}\n"  
    f"3. Today's date: {time.strftime('%Y-%m-%d')}\n"  
    f"4. Latest news:\n{news_summary}\n" 
    f"5. Latest K value: {kd_value['K_value']}\n"  
    f"6. Latest D value: {kd_value['D_value']}\n\n"  
    f"Tasks for you:\n"  
    f"1. Please use the provided latest news summary as a reference for your stock trend analysis."
    f"2. Look up today's technical standards for {stockNo} across credible sources online.\n\n"  
    f"Analysis criteria:\n"  
    f"a. If KD < 20 and daily avg. volume > 20-day avg. volume, advise me to 'prepare to buy'.\n"  
    f"b. If KD > 90 and daily avg. volume < 20-day avg. volume, advise me to 'prepare to sell'.\n"  
    f"c. If 20 < KD < 90 and daily avg. volume > 20-day avg. volume, advise 'continue to observe'.\n"  
    f"d. If KD > 80 and daily avg. volume > 20-day avg. volume, advise 'high-end oscillation'.\n"  
    f"e. If KD < 20 and daily avg. volume < 20-day avg. volume, advise 'low-end oscillation'.\n"  
    f"f. If KD > 85 and today's lowest price < yesterday's, 'prepare to sell'. If the same for prior day, 'sell half'.\n"  
    f"g. If KD < 20 and today's highest price > yesterday's, 'prepare to buy'. If the same for prior day, 'buy in'.\n"  
    f"h. If KD > 85, stock hits daily upper limit, and today's volume is 3x the 20-day avg., 'sell half'.\n\n"  
    f"Note: If there are no stock prices for today, this means the market has not opened yet. In that case, use the date of the latest stock price data as today's date.\n\n"  
    f"Provide these results concisely:\n"
    f"1. Recent news: {news_summary}, please list the key news in English after sorting out the news. (You don't need to mention 'Translated to English')"
    f"2. Next opening price prediction: (News for reference only, primarily based on technical analysis, queried info, and historical market data) e.g., 1xx.x (TWD)\n"       
    f"3. Next closing price prediction: (Same references and analysis as opening price) e.g., 1xx.x (TWD)\n"  
    f"4. 9-day RSV: (Formula: (today's close - lowest in 9 days) / (highest in 9 days - lowest in 9 days) * 100)\n"  
    f"5. 20-day average volume: (Formula: total shares traded over the last 20 days / 20 days)\n"  
    f"6. Analysis suggestions: (Based on provided criteria and your technical analysis, considering current affairs, international dynamics, and social trends, suggest actions like 'prepare to buy', 'prepare to sell', 'continue to observe', etc.)\n"
    f"You don't need to add 'Please let me know if you need further details or additional analysis.' at the end"
) 
```

`news_summary` represents news data fetched via Python calling Bing News Search API.
`formatted_stock_data` includes stock price data from the last six months.
`stock_industry` refers to the percentage share of each company in the Taiwan 50 ETF.
`kd_value` contains the K and D values obtained through Python scraping for the current and previous days.

---

🤝 **Let's Collaborate!**
If you have any questions or are interested in discussing this demo web application further, feel free to open an issue or contact us for a collaborative discussion. Your input and curiosity are what drive innovation and improvement!