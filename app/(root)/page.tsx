import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Hrushikesh", lastName: "Govekar", email: "hrushi@gmail.com"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {7016.98}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user = {loggedIn}
        transactions= {[]}
        banks = {[{currentBalance: 123.50}, {currentBalance: 543.50}]}
      />
    </section>
  );
};

export default Home;
