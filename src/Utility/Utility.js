import { FILTER_TRANSACTION, transactionColumn } from "../Contants/Enums";

export const getThreeMonthDate = (currentDate = new Date()) => {
  return new Date(currentDate.setMonth(currentDate.getMonth() - 3));
};
export const calculateRewards = (price) => {
  if (price >= 50 && price < 100) {
    return price - 50;
  } else if (price >= 100) {
    return 2 * (price - 100) + 50;
  }
  return 0;
};

export const getLastThreeMonthsRecords = (
  transactionList
) => {
  let filteredList = transactionList.filter(
    (trans) => trans.transactionDate > getThreeMonthDate()
  );
  return filteredList;
};
export const getAllRecords = (
  transactionList
) => {
  return transactionList;
};

export const addTransactionData = (price) => {
  const transaction = {
    price: price,
    rewards: calculateRewards(price),
    transactionDate: new Date(),
  };
  return transaction;
};

export const getTotalRewards = (
  transactionList
) => {
  return transactionList.length
    ? transactionList.reduce((acc, key) => key.rewards + acc, 0)
    : 0;
};

export const getPerMonthReward = (
  month,
  transactionList
) => {
  const rewards = [];
  for (let i = 0; i < month; i++) {
    let filteredList = transactionList.filter(
      (trans) => trans.transactionDate.getMonth() === new Date().getMonth() - i
    );
    let perMonthObj = {};
    perMonthObj.rewards = filteredList.reduce(
      (acc, key) => key.rewards + acc,
      0
    );
    perMonthObj.transactionDate = filteredList[0].transactionDate;
    rewards.push(perMonthObj);
  }
  return rewards;
};

export const getTableColumns = (filter) => {
  const columns = transactionColumn;
  if (filter === FILTER_TRANSACTION.PER_MONTH_REWARD) {
    columns[0].isVisible = false;
  } else {
    columns[0].isVisible = true;
  }
  return columns;
};

export const shouldComponentVisible = (
  filter,
  check
) => {
  return check.filter((x) => x === filter).length ? true : false;
};

export const getFilteredRecords = (
  filterType,
  transactionList,
  month = 1
) => {
  if (transactionList.length) {
    switch (filterType) {
      case FILTER_TRANSACTION.ALL: {
        return getAllRecords(transactionList);
      }
      case FILTER_TRANSACTION.THREE_MONTH: {
        return getLastThreeMonthsRecords(transactionList);
      }
      case FILTER_TRANSACTION.PER_MONTH_REWARD: {
        return getPerMonthReward(month, transactionList);
      }
      default: {
        return transactionList;
      }
    }
  }
  return transactionList;
};