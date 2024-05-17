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
    f"You are a financial analyst, and I am your client. This is important to me. Predicting failure will result in a loss of my trust.\n"
    f"I need you to help me predict the next opening stock price and provide relevant technical analysis based on the following data.\n"
    f"News: {formatted_news} Stock price: {formatted_stock_data}, Industry share: {stock_industry}, Today's date: {time.strftime('%Y-%m-%d')}, Other reference information: https://tw.stock.yahoo.com/quote/{stockNo}.TW\n"
    f"The latest K value is {kd_value['K_value']}, and the latest D value is {kd_value['D_value']}. You do not need to calculate today's KD.\n"
    f"First, check the news information of the top 5 companies that account for {stockNo} in the past 2 days, which can be used as a reference for stock price prediction.\n"
    f"Also, please check the news of the main customers of these companies in the past 2 days, which can be used as a reference for stock price prediction.\n"
    f"Then check the relevant technical standards of {stockNo} on the Internet today as a reference.\n"
    f"Analysis reference points:\n"
    f"1. If the KD value is less than 20 and the daily average volume is greater than the average volume of 20 days, the analytical suggestion please remind me 'buy point'\n"
    f"2. If the KD value is greater than 90 and the daily average volume is less than the average volume of 20 days, the analytical suggestion please remind me 'sell point'\n"
    f"3. If the KD value is greater than 20 and less than 90, and the daily average volume is greater than the average volume of 20 days, the analytical suggestion please remind me 'continue to observe'\n"
    f"4. If the KD value is greater than 80 and the daily average volume is greater than the average volume of 20 days, the analytical suggestion please remind me 'high-end oscillation'\n"
    f"5. If the KD value is less than 20 and the daily average volume is less than the average volume of 20 days, the analytical suggestion please remind me 'low-end oscillation'\n"
    f"6. If KD > 85 and today's lowest price is lower than yesterday's lowest price, remind me to prepare to sell. If yesterday's lowest price is also lower than the day before yesterday's lowest price, remind me to sell half.\n"
    f"7. If KD < 20 and today's highest price is higher than yesterday's highest price, remind me to prepare to buy. If yesterday's highest price is also higher than the day before yesterday's highest price, remind me that I can buy in.\n"
    f"8. If KD > 85 and the stock has hit the daily limit up today, and today's trading volume is three times the 20-day average volume, remind me to sell half.\n"
    f"Then return to me the following information. You don't need too much text explanation, just the result:\n"
    f"Next opening price prediction: (Based on the news information I provided, the news information you queried, and the stock market price in the past six months, and the other reference information I provided, predict according to your technical and professional analysis) ex.1xx.x (TWD)\n"
    f"RSV based on 9 days: (The calculation formula is (today's closing price - the lowest price in the past 9 days) / (the highest price in the past 9 days - the lowest price in the past 9 days) * 100)\n"
    f"20-day average volume: (The calculation formula is => the number of shares traded within 20 days (look back 20 days from the stock price data, including today by default, if there is no data today, calculate it one day earlier) / 20)\n"
    f"Analysis suggestions: (Based on the analysis points I provided and your technical analysis, as well as your views on current affairs, international, and social trends, explain your analysis, provide buy points, sell points, continuous observation, etc. Suggestions)\n"
)
```

`formatted_news` represents news data fetched via Python scraping.
`formatted_stock_data` includes stock price data from the last six months.
`stock_industry` refers to the percentage share of each company in the Taiwan 50 ETF.
`kd_value` contains the K and D values obtained through Python scraping for the current and previous days.

---

🤝 **Let's Collaborate!**
If you have any questions or are interested in discussing this demo web application further, feel free to open an issue or contact us for a collaborative discussion. Your input and curiosity are what drive innovation and improvement!