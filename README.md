# Taiwan-Stock-Prediction-App 📈

Welcome to the `Taiwan-Stock-Prediction-App` repository! This web application is designed to provide deep analytical insights into the Taiwanese stock market, with a special focus on prominent ETFs such as 00881, 00878, and 00933B. Utilizing cutting-edge algorithms, it processes extensive stock data and news to deliver impactful analysis on the semiconductor industry and AI sector advancements. Our predictive models are at the core of the app, offering estimations on stock trends and actionable trading recommendations.

[LINK](https://jackyleedesign.github.io/chatGPT4o-taiwan-stocks-prediction/)

![image](https://raw.githubusercontent.com/JackyLeeDesign/chatGPT4o-taiwan-stocks-prediction/main/demo.png)

## 🚨 Important Disclaimer:
Please note that investing in stocks carries inherent risks, including the potential for loss. The creators of this website will not be held responsible for any financial outcomes. All content provided herein is for educational purposes only. We strongly advise users to perform thorough research and exercise caution when making investment decisions.

---

# Define prompt for GPT-o3-mini 🤖
The following prompt was crafted to interact with GPT-o3-mini, aiming to simulate a scenario where a financial analyst (played by GPT-4) provides stock price predictions and technical analysis:

```python
# Define prompt for GPT-4  
prompt = (  
    f"You are a financial analyst, and I am your client. It is important to maintain my trust by providing insightful and accurate stock predictions and analysis."  
    f"Here is the relevant data:"  
    f"1. Stock price data: {formatted_stock_data}"  
    f"2. Industry share: {stock_industry}"  
    f"3. Today's date: {time.strftime('%Y-%m-%d')}"  
    f"4. Latest news:\n{news_summary}"  
    f"5. Latest K value: {kd_value['K_value']}"  
    f"6. Latest D value: {kd_value['D_value']}" 

    f"Tasks for you:"  
    f"1. Use the provided latest news summary as a reference for your stock trend analysis."
    f"2. Perform your own comprehensive and mainstream technical analysis."
    f"3. Predict whether today's closing price or tomorrow's opening price indicates a buying opportunity. Clearly highlight if it is."
    f"4. Provide predicted selling points for short-term (within 1 month), mid-term (1-3 months), and long-term (3-6 months) holdings."
    f"5. Even if you do not see a buying opportunity, based on your analysis, explain why you don't favor the future trend."
    
    f"Notes:"
    f"- Continue using my input data for reference without change."
    f"- If there are no stock prices for today, use the date of the latest stock data as today's date."
    
    f"Provide these results concisely:"
    f"1. Recent news: {news_summary}, and list key news in English. (You don't need to mention 'Translated to English')"
    f"2. Next opening price prediction: Base on technical analysis and data, e.g., 1xx.x (TWD)"       
    f"3. Next closing price prediction: Base on technical analysis and data, e.g., 1xx.x (TWD)"  
    f"4. 9-day RSV: (Formula: (today's close - lowest in 9 days) / (highest in 9 days - lowest in 9 days) * 100)"  
    f"5. 20-day average volume: (Formula: total shares traded over the last 20 days / 20 days)"  
    f"6. Analysis suggestions: Based on your own comprehensive and mainstream technical analysis and current affairs, suggest actions such as 'buy', 'sell', 'hold', etc., and comment on future trends if not favorable."
    f"You don't need to add 'Please let me know if you need further details or additional analysis.' at the end"
)
```

`news_summary` represents news data fetched via Python calling Bing News Search API.
`formatted_stock_data` includes stock price data from the last six months.
`stock_industry` refers to the percentage share of each company in the Taiwan ETF.
`kd_value` contains the K and D values obtained through Python scraping for the current and previous days.

---

🤝 **Let's Collaborate!**
If you have any questions or are interested in discussing this demo web application further, feel free to open an issue or contact us for a collaborative discussion. Your input and curiosity are what drive innovation and improvement!