import { FILTER_TRANSACTION } from "../../Contants/Enums";
import {addTransactionData, calculateRewards,getAllRecords,getFilteredRecords,getLastThreeMonthsRecords,getPerMonthReward,getTableColumns,getThreeMonthDate,getTotalRewards,sortData} from "../../Utility/Utility"
import { actualTransactionList } from "./testData";

describe("Utility-helper test suites", () => {
  test("Should return the rewards point if price is greater than or equal to 50 and price less than 100 ", async () => {
    const price = 70;
    expect(calculateRewards(price)).toBe(20);
  });
  test("Should return the rewards point if price is greater than 100 ", async () => {
    const price = 120;
    expect(calculateRewards(price)).toBe(90);
  });
  test("Should return  point zero if price is less than 100 and less than 50 ", async () => {
    const price = 20;
    expect(calculateRewards(price)).toBe(0);
  });
  test("Should return three month back date", async () => {
    const testDate = "Fri Jun 25 2022 20:57:39 GMT+0530 (India Standard Time)";
    const expectedDate =
      "Fri Mar 25 2022 20:57:39 GMT+0530 (India Standard Time)";
    expect(getThreeMonthDate(new Date(testDate)).toString()).toContain(expectedDate);
  });
  test("Should return three month data", async () => {
    expect(getLastThreeMonthsRecords(actualTransactionList)).toHaveLength(2);
  });
  test("Should return all the records", async () => {
    expect(getAllRecords(actualTransactionList)).toHaveLength(5);
  });
  test("Should return added transaction reward point", async () => {
    expect(addTransactionData(100).rewards).toBe(50);
  });
  test("Should return total reward points", async () => {
    expect(getTotalRewards(actualTransactionList)).toBe(794);
  });
  test("Should return per month records", async () => {
    expect(getPerMonthReward(1,actualTransactionList)).toHaveLength(1);
  });
  test("Should return all records as per filter", async () => {
    expect(getFilteredRecords(FILTER_TRANSACTION.ALL,actualTransactionList)).toHaveLength(5);
  });
  test("Should return three months records as per filter", async () => {
    expect(getFilteredRecords(FILTER_TRANSACTION.THREE_MONTH,actualTransactionList)).toHaveLength(2);
  });
  test("Should return per month records as per filter", async () => {
    expect(getFilteredRecords(FILTER_TRANSACTION.PER_MONTH_REWARD,actualTransactionList)).toHaveLength(1);
  });
  test("Should return default if no filter selected", async () => {
    expect(getFilteredRecords('',actualTransactionList)).toHaveLength(5);
  });
  test("Should return empty transaction list if there is no data", async () => {
    expect(getFilteredRecords('',[])).toHaveLength(0);
  });
  test("Should return table column isVisible false if filter per month record selected", async () => {
    expect(getTableColumns(FILTER_TRANSACTION.PER_MONTH_REWARD)[0].isVisible).toBeFalsy();
  });
  test("Should return table column isVisible true if filter per month record is not selected", async () => {
    expect(getTableColumns(FILTER_TRANSACTION.ALL)[0].isVisible).toBeTruthy();
  });
});

