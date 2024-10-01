import React from "react";

import {
  ArrowDownRight,
  ArrowUpLeft,
  DollarSign,
  Grip,
  MessageSquareMore,
} from "lucide-react";

import Sidebar from "./components/ui/Sidebar";
import Navbar from "./components/ui/Navbar";
import Tile from "./components/ui/Tile";
import SelectDropdown from "./components/ui/SelectDropdown";
import DonutChart from "./components/ui/charts/DonutChart";
import LineChart from "./components/ui/charts/LineChart";
import CustomBarChart from "./components/ui/charts/CustomBarChart";
import BarChart from "./components/ui/charts/BarChart";
import ProjectsTable from "./components/ui/ProjectsTable";
import Button from "./components/ui/Button";

const App = () => {
  const projects = [
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-2-8a001bcb.jpg",
      assignedName: "Sunil Joshi",
      assignedRole: "Web Designer",
      projectName: "Elite Admin",
      priorityLabel: "Low",
      priorityColor: "green",
      budget: "$3.9k",
    },
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-3-94da4ac7.jpg",
      assignedName: "John Deo",
      assignedRole: "Web Developer",
      projectName: "Flexy Admin",
      priorityLabel: "Medium",
      priorityColor: "yellow",
      budget: "$24.5k",
    },
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-4-a9b2728d.jpg",
      assignedName: "Mathew Anderson",
      assignedRole: "Web Manager",
      projectName: "Material Pro",
      priorityLabel: "High",
      priorityColor: "red",
      budget: "$12.8k",
    },
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-5-77f60b86.jpg",
      assignedName: "Yuvraj Sheth",
      assignedRole: "Project Manager",
      projectName: "Xtreme Admin",
      priorityLabel: "Very High",
      priorityColor: "blue",
      budget: "$2.4k",
    },
  ];

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Navbar */}
          <div>
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="flex-grow py-8 px-6 sm:mx-32 lg:mx-28 overflow-y-auto">
            {/* Tiles Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-6">
              <Tile
                bgColor="bg-[#ecf2ff]"
                imgSrc="https://modernize-react.adminmart.com/assets/icon-user-male-ff0c3edd.svg"
                title="Employees"
                count="96"
                textColor="text-[#5d87ff]"
              />
              <Tile
                bgColor="bg-[#fef5e5]"
                imgSrc="https://modernize-react.adminmart.com/assets/icon-briefcase-5ac68925.svg"
                title="Clients"
                count="3,650"
                textColor="text-[#ffae1f]"
              />
              <Tile
                bgColor="bg-[#e8f7ff]"
                imgSrc="https://modernize-react.adminmart.com/assets/icon-mailbox-58a01fce.svg"
                title="Projects"
                count="356"
                textColor="text-[#49beff]"
              />
              <Tile
                bgColor="bg-[#fdede8]"
                imgSrc="https://modernize-react.adminmart.com/assets/icon-favorites-c75eec14.svg"
                title="Events"
                count="696"
                textColor="text-[#fa896b]"
              />
              <Tile
                bgColor="bg-[#e6fffa]"
                imgSrc="https://modernize-react.adminmart.com/assets/icon-speech-bubble-4432cbf3.svg"
                title="Payroll"
                count="$96k"
                textColor="text-[#13deb9]"
              />
              <Tile
                bgColor="bg-[#ebf3fe]"
                imgSrc="https://modernize-react.adminmart.com/assets/icon-connect-93bb1783.svg"
                title="Reports"
                count="59"
                textColor="text-[#539bff]"
              />
            </div>

            {/* Dashboard Section */}
            <div className="container mx-auto">
              {/* Revenue updates and metric container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                {/* Left Panel (Graph + Earnings & Expenses) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-md shadow">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="leading-3">
                      <h2 className="text-lg font-semibold">Revenue Updates</h2>
                      <p className="text-sm text-gray-500">
                        Overview of Profit
                      </p>
                    </div>
                    <div className="flex items-center">
                      {/* Select Dropdown */}
                      <SelectDropdown
                        options={["March 2024", "Feb 2024", "Jan 2024"]}
                      />
                    </div>
                  </div>

                  {/* Graph and metrics */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Graph */}
                    <div className="lg:col-span-2">
                      <CustomBarChart />
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-col gap-5 ml-3">
                      <div>
                        <p className="text-2xl text-gray-800 font-bold">
                          $63,489.50
                        </p>
                        <p className="text-gray-500">Total Earnings</p>
                      </div>

                      <div>
                        <p className="text-gray-700">
                          <span className="text-blue-500">
                            Earnings this month
                          </span>
                          <br />
                          <span className="font-semibold text-lg">
                            {" "}
                            $48,820{" "}
                          </span>
                        </p>
                        <p className="text-gray-700 mt-1">
                          <span className="text-blue-300">
                            Expense this month
                          </span>
                          <br />
                          <span className="font-semibold text-lg">
                            {" "}
                            $26,498{" "}
                          </span>
                        </p>
                        {/* View Full Report Button */}
                        <div className="mt-6">
                          <Button label="View Full Report" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel (Yearly and Monthly) */}
                <div className="space-y-6">
                  {/* Yearly Breakup Card */}
                  <div className="bg-white p-6 rounded-md shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-semibold">Yearly Breakup</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="flex flex-col gap-1 mt-4">
                          <p className="text-2xl font-bold">$36,358</p>
                          <div className="flex gap-2">
                            <div className="bg-[#e6fffa] w-6 h-6 flex items-center justify-center rounded-full">
                              <ArrowUpLeft className="text-[#39B69A] w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-gray-900 text-sm font-semibold">
                                +9%
                              </span>
                              <span className="text-gray-500 text-sm ml-2">
                                last year
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="text-gray-500 text-sm flex items-center justify-center">
                            <span className="text-3xl text-[#5d87ff] leading-none">
                              •
                            </span>
                            <span className="ml-2">2025</span>
                            <span className="text-3xl text-[#ecf2ff] leading-none ml-4">
                              •
                            </span>
                            <span className="ml-2">2024</span>
                          </p>
                        </div>
                      </div>
                      {/* Placeholder for Donut Chart */}
                      <div className="h-20 w-20 mt-4 rounded-full flex items-center justify-center">
                        <DonutChart />
                      </div>
                    </div>
                  </div>

                  {/* Monthly Earnings Card */}
                  <div className="bg-white rounded-md shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">
                          Monthly Earnings
                        </p>
                        {/* Placeholder for Small Line Chart  */}
                        <div className="h-11 w-11 bg-[#49beff] hover:bg-[#3fa6dd] rounded-full flex items-center justify-center cursor-pointer">
                          <DollarSign className="text-white w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 mt">
                        <p className="text-2xl font-bold">$6,820</p>
                        <div className="flex gap-2">
                          <div className="bg-[#fdede8] w-6 h-6 flex items-center justify-center rounded-full">
                            <ArrowDownRight className="text-[#FA896B] w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-gray-900 text-sm font-semibold">
                              +9%
                            </span>
                            <span className="text-gray-500 text-sm ml-2">
                              last year
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <LineChart
                        labels={["", "", "", "", "", "", ""]}
                        dataSet={[25, 66, 20, 40, 12, 58, 20]}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Employee salary and best selling products container */}
              <div className="container mx-auto mb-6">
                {/* Main container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* Employee Salary box */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    {/* Header */}
                    <h2 className="text-lg font-semibold">Employee Salary</h2>
                    <p className="text-sm text-gray-500">Every month</p>

                    {/* Graph */}
                    <div className="my-6">
                      <BarChart
                        labels={["Apr", "May", "June", "July", "Aug", "Sept"]}
                        dataSets={[20, 15, 30, 25, 10, 15]}
                        borderThickness={20}
                        backgroundColor={[
                          "#f2f6fad9",
                          "#f2f6fad9",
                          "#5d87ffd9",
                          "#f2f6fad9",
                          "#f2f6fad9",
                          "#f2f6fad9",
                        ]}
                        borderRadius={5}
                        categoryPercentage={{}}
                        barPercentage={{}}
                        width={"full"}
                        height={64}
                      />
                    </div>

                    {/* Salary and Profit */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex gap-3">
                        <div className="w-9 h-9 flex items-center justify-center bg-[#ecf2ff] rounded-md">
                          <Grip className="text-[#5d87ff] w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-gray-500">Salary</p>
                          <p className="text-base font-semibold">$36,358</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-9 h-9 flex items-center justify-center bg-[#eaeff4] rounded-md">
                          <Grip className="text-[#7c8fac] w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-gray-500">Profit</p>
                          <p className="text-base font-semibold">$5,296</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customers, Projects and Announcement */}
                  <div className="flex flex-col gap-5">
                    {/* <!-- Customers and Projects boxes --> */}
                    <div className="flex flex-col lg:flex-row gap-5">
                      {/* <!-- Customers --> */}
                      <div className="bg-white rounded-lg shadow">
                        <div className="p-6">
                          <p className="text-sm text-gray-500">Customers</p>
                          <p className="text-xl font-semibold">36,358</p>
                          <div className="flex gap-2 mt-2">
                            <div className="bg-[#fdede8] w-6 h-6 flex items-center justify-center rounded-full"></div>
                            <div>
                              <span className="text-gray-900 text-sm font-semibold">
                                +9%
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Line Chart Placeholder --> */}
                        <div className="">
                          <LineChart
                            labels={["", "", "", "", "", ""]}
                            dataSet={[30, 25, 35, 20, 30, 40]}
                            width={150}
                            height={80}
                          />
                        </div>
                      </div>

                      {/* <!-- Projects --> */}
                      <div className="bg-white rounded-lg shadow">
                        <div className="p-6">
                          <p className="text-sm text-gray-500">Projects</p>
                          <p className="text-xl font-semibold">78,298</p>
                          <div className="flex gap-2 mt-2">
                            <div className="bg-[#e6fffa] w-6 h-6 flex items-center justify-center rounded-full"></div>
                            <div>
                              <span className="text-gray-900 text-sm font-semibold">
                                +9%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* <!-- Bar Chart Placeholder --> */}
                        <div className="">
                          <BarChart
                            labels={["", "", "", "", "", "", "", "", ""]}
                            dataSets={[4, 10, 9, 7, 9, 10, 11, 8, 10]}
                            borderThickness={4}
                            backgroundColor={"#5d87ffd9"}
                            borderRadius={10}
                            categoryPercentage={0.7}
                            barPercentage={0.8}
                            width={36}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <!-- Announcement box --> */}
                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="flex flex-row items-center">
                        <div className="h-16 w-16 min-w-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <img
                            src="https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg"
                            alt="Avatar"
                            className="rounded-md"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-semibold">
                            Super awesome, Vue coming soon!
                          </p>
                          <p className="text-sm text-gray-500">
                            22 March, 2025
                          </p>
                        </div>
                      </div>

                      {/* <!-- Team Avatars --> */}
                      <div className="mt-9 flex items-center justify-between">
                        <div className="flex">
                          <div className="h-10 w-10 border-2 border-white rounded-full flex items-center justify-center">
                            <img
                              src="https://modernize-react.adminmart.com/assets/user-2-8a001bcb.jpg"
                              alt="A1"
                              className="rounded-full bg-white"
                            />
                          </div>
                          <div className="h-10 w-10 -ml-2 border-2 border-white rounded-full flex items-center justify-center">
                            <img
                              src="https://modernize-react.adminmart.com/assets/user-3-94da4ac7.jpg
                          "
                              alt="A1"
                              className="rounded-full bg-white"
                            />
                          </div>
                          <div className="h-10 w-10 -ml-2 border-2 border-white rounded-full flex items-center justify-center">
                            <img
                              src="https://modernize-react.adminmart.com/assets/user-4-a9b2728d.jpg"
                              alt="A1"
                              className="rounded-full bg-white"
                            />
                          </div>
                          <div className="h-10 w-10 -ml-2 border-2 border-white rounded-full flex items-center justify-center">
                            <img
                              src="https://modernize-react.adminmart.com/assets/user-5-77f60b86.jpg
                          "
                              alt="A1"
                              className="rounded-full bg-white"
                            />
                          </div>
                        </div>

                        <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center cursor-pointer">
                          <p className="text-[#5d87ff]">
                            <MessageSquareMore className="w-5 h-5" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best selling products box */}
                  <div className="bg-[#5d87ff] p-6 rounded-lg shadow-md text-white">
                    {/* Header --> */}
                    <h2 className="text-xl font-bold">Best selling products</h2>
                    <p className="text-white">Overview 2024</p>

                    {/* Image Placeholder --> */}
                    <div className="h-32 pt-6 rounded-lg flex items-center justify-center my-6">
                      <img
                        src="https://modernize-react.adminmart.com/assets/piggy-84077fef.png"
                        alt="image"
                      />
                    </div>

                    {/* Products --> */}
                    <div className="bg-white space-y-4 mt-6 rounded-lg py-5 px-5">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col text-black">
                          <p>MaterialPro</p>
                          <p className="text-sm">$23,568</p>
                        </div>
                        <div className="">
                          <p className="w-12 h-7 text-sm text-[#5d87ff] bg-[#ecf2ff] rounded-md p-2 flex items-center justify-center">
                            55%
                          </p>
                        </div>
                      </div>
                      <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#5d87ff]"
                          style={{ width: "55%" }}
                        ></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col text-black">
                          <p>Flexy Admin</p>
                          <p className="text-sm">$23,568</p>
                        </div>
                        <div className="">
                          <p className="w-12 h-7 text-sm text-[#49beff] bg-[#ecf2ff] rounded-md p-2 flex items-center justify-center">
                            20%
                          </p>
                        </div>
                      </div>

                      <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#49beff]"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly status and Top projects container */}
              <div className="container mx-auto mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* Weekly Stats Card */}
                  <div className="col-span-1 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Weekly Stats</h2>
                    <p className="text-sm text-gray-500">Average sales</p>

                    {/* Line Chart Placeholder --> */}
                    <div className=" mt-6">
                      <LineChart
                        labels={["", "", "", "", ""]}
                        dataSet={[5, 15, 5, 10, 5]}
                        width={150}
                        height={80}
                      />
                    </div>

                    {/* Stats List --> */}
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600">##</span>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold">Top Sales</p>
                          <p className="text-gray-500">Johnathan Doe</p>
                        </div>
                        <div className="ml-auto text-blue-600 font-bold">
                          +68
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600">##</span>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold">Best Seller</p>
                          <p className="text-gray-500">Footware</p>
                        </div>
                        <div className="ml-auto text-green-600 font-bold">
                          +45
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-600">##</span>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold">Most Commented</p>
                          <p className="text-gray-500">Fashionware</p>
                        </div>
                        <div className="ml-auto text-red-600 font-bold">
                          +14
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Projects Card */}
                  <div className="col-span-2 bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-semibold">Top Projects</h2>
                        <p className="text-sm text-gray-500">Best Products</p>
                      </div>
                      <div className="">
                        <SelectDropdown
                          options={["March 2024", "Apr 2024", "May 2024"]}
                        />
                      </div>
                    </div>

                    {/* Projects Table  */}
                    <ProjectsTable projects={projects} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
