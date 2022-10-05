
import numpy
import datetime
import matplotlib.pyplot as plt
from keras import Sequential
from sklearn.preprocessing import MinMaxScaler
from keras.layers import Dense, LSTM, Dropout
import requests
from collections.abc import Iterable


plt.style.use('fivethirtyeight')


def flatten(lis):
   for item in lis:
      if isinstance(item, Iterable) and not isinstance(item, str):
         for x in flatten(item):
            yield x
      else:
         yield item


def stock_predictor(ticker):

   today= datetime.datetime.today().strftime('%Y-%m-%d')
   today_3 = (datetime.datetime.today() - datetime.timedelta(days=3*365)).strftime('%Y-%m-%d')
   url=f'https://financialmodelingprep.com/api/v3/historical-price-full/{ticker}?from={today_3}&to={today}&apikey=0bcc504296972a2429ad290f7f521da3'
   url2 = f'https://financialmodelingprep.com/api/v3/quote-short/{ticker}?apikey=0977828996c3641c473b928b98aa4061'
   response= requests.get(url)
   response2=requests.get(url2)
   historical= response.json()["historical"]
   currentPrice=response2.json()[0]['price']
   len_close=len(historical)
   closePricelist=[]

   for i in reversed(range(0,len_close)):
      closePricelist.append(historical[i]["close"])

   closePricelist.append(currentPrice)
   scaler = MinMaxScaler(feature_range=(0, 1))

   df1=scaler.fit_transform(numpy.array(closePricelist).reshape(-1,1))
   train_size = int(len(df1) * 0.65)
   test_size = len(df1) - train_size
   train_data, test_data = df1[0:train_size, :], df1[train_size:len(df1), :1]

   def create_dataset(dataset, time_step=1):
      dataX, dataY = [], []
      for i in range(len(dataset) - time_step - 1):
         a = dataset[i:(i + time_step), 0]  ###i=0, 0,1,2,3-----99   100
         dataX.append(a)
         dataY.append(dataset[i + time_step, 0])
      return numpy.array(dataX), numpy.array(dataY)

   time_step = 100
   X_train, y_train = create_dataset(train_data, time_step)
   X_test, ytest = create_dataset(test_data, time_step)

   X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)
   X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)

   model = Sequential()
   model.add(LSTM(50, return_sequences=True, input_shape=(100, 1)))
   model.add(Dropout(0.1))
   model.add(LSTM(50, return_sequences=True))
   model.add(Dropout(0.1))
   model.add(LSTM(50))
   model.add(Dropout(0.1))
   model.add(Dense(1))
   model.compile(loss='mean_squared_error', optimizer='adam')

   model.fit(X_train, y_train, validation_data=(X_test, ytest), epochs=10, batch_size=64, verbose=1)

   train_predict = model.predict(X_train)
   test_predict = model.predict(X_test)

   train_predict = scaler.inverse_transform(train_predict)
   test_predict = scaler.inverse_transform(test_predict)


   size= test_size-100

   x_input = test_data[size:].reshape(1, -1)

   temp_input = list(x_input)
   temp_input = temp_input[0].tolist()

   lst_output = []
   n_steps = 100
   i = 0
   while (i < 7):
      if (len(temp_input) > 100):
         # print(temp_input)
         x_input = numpy.array(temp_input[1:])
         # print("{} day input {}".format(i, x_input))
         x_input = x_input.reshape(1, -1)
         x_input = x_input.reshape((1, n_steps, 1))
         # print(x_input)
         yhat = model.predict(x_input, verbose=0)
         # print("{} day output {}".format(i, yhat))
         temp_input.extend(yhat[0].tolist())
         temp_input = temp_input[1:]
         # print(temp_input)
         lst_output.extend(yhat.tolist())
         i = i + 1

      else:
         x_input = x_input.reshape((1, n_steps, 1))
         yhat = model.predict(x_input, verbose=0)
         # print(yhat[0])
         temp_input.extend(yhat[0].tolist())
         # print(len(temp_input))
         lst_output.extend(yhat.tolist())
         i = i + 1


   lst_output2 = scaler.inverse_transform(lst_output)
   lst_output43=lst_output2.tolist()
   lastnum= list(flatten(lst_output43))

   return str(lastnum)






# print(stock_predictor('AAPL'))





