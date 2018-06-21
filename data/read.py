import pandas as pd
import os

def get_file_name(file_name):
        return int(file_name.split('.')[0])

def read_df(file_name):
    path = 'data/datasets/%s.csv' % file_name
    return pd.read_csv(path)

def df_to_list(df):
    return df.values.tolist()

class Reader:

    @staticmethod
    def get_rank_list():
        path = 'data/datasets/'
        file_name_list = list()
        file_list = list()
        for i in os.listdir(path):
            file_name_list.append(get_file_name(i))
        file_name_list = sorted(file_name_list)
        for i in file_name_list:
            file = read_df(str(i))
            file = df_to_list(file)
            file.insert(0, i)
            file_list.append(file)
        return file_list
        # for i in file_list:
        #     print(i)

if __name__ == "__main__":
    r = Reader
    r.get_rank_list()


