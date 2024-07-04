import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "../css/githubprogress.css";
import "react-tooltip/dist/react-tooltip.css";

function GithubProgress() {
  const explicitTheme = {
    light: ["#dbeafe", "#93c5fd", "#82a9ec", "#4969a0", "#203354"],
    dark: ["#dbeafe", "#93c5fd", "#82a9ec", "#4969a0", "#203354"],
  };

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const selectLastEightYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const labels = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    weekdays: [
      "Sun", // Sunday first!
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ],
    totalCount: "Santhosh has made {{count}} contributions in {{year}}.",
    legend: {
      less: "Less",
      more: "More",
    },
  };

  const labels2 = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    weekdays: [
      "Sun", // Sunday first!
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ],
    totalCount: "*Santhosh made {{count}} contributions in {{year}}.",
    legend: {
      less: "Less",
      more: "More",
    },
  };
  return (
    <div className="bg-white flex overflow-x-auto flex-col pb-12 md:pb-24 px-5 md:px-12 justify-center">
      <h1 class="text-[#203354] text-start ps-4 border-s-4 border-[#203354] w-fit font-semibold text-2xl md:text-5xl mb-16 min-[500px]:text-3xl leading-tight">
        My Live GitHub Activity
      </h1>
      <span className="hidden xl:block">
        <GitHubCalendar
          username="Santhosh20112003"
          year={2024}
          hideColorLegend={false}
          colorScheme={"light"}
          blockSize={17}
          blockRadius={4}
          fontSize={18}
          showWeekdayLabels
          blockMargin={6}
          theme={explicitTheme}
          hideMonthLabels={false}
          labels={labels}
          weekStart={1}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
            })
          }
        />

        <ReactTooltip id="react-tooltip" />
      </span>
      <span className="hidden md:block xl:hidden">
        <GitHubCalendar
          username="Santhosh20112003"
          year={2024}
          hideColorLegend={false}
          colorScheme={"light"}
          blockSize={20}
          blockRadius={4}
          fontSize={16}
          showWeekdayLabels
          blockMargin={6}
          theme={explicitTheme}
          hideMonthLabels={false}
          labels={labels}
          transformData={selectLastHalfYear}
          weekStart={1}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
            })
          }
        />

        <ReactTooltip id="react-tooltip" />
      </span>
      <span className="hidden sm:block md:hidden">
        <GitHubCalendar
          username="Santhosh20112003"
          year={2024}
          hideColorLegend={false}
          colorScheme={"light"}
          blockSize={16}
          blockRadius={4}
          fontSize={12}
          showWeekdayLabels
          blockMargin={6}
          theme={explicitTheme}
          transformData={selectLastHalfYear}
          hideMonthLabels={false}
          labels={labels}
          weekStart={1}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
            })
          }
        />

        <ReactTooltip id="react-tooltip" />
      </span>
      <span className="block sm:hidden">
        <GitHubCalendar
          username="Santhosh20112003"
          year={2024}
          hideColorLegend={true}
          colorScheme={"light"}
          blockSize={10}
          blockRadius={2}
          fontSize={14}
          showWeekdayLabels={false}
          blockMargin={3}
          theme={explicitTheme}
          hideMonthLabels={false}
          labels={labels2}
          weekStart={1}
          transformData={selectLastHalfYear}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities`,
            })
          }
        />

        <ReactTooltip id="react-tooltip" />
      </span>
    </div>
  );
}

export default GithubProgress;
