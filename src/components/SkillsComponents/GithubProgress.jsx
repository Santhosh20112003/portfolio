import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function GithubProgress() {
  const explicitTheme = {
    light: ["#dbeafe", "#93c5fd", "#82a9ec", "#4969a0", "#203354"],
    dark: ["#dbeafe", "#93c5fd", "#82a9ec", "#4969a0", "#203354"],
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
  return (
    <div className="bg-white flex px-5 py-12 items-center justify-center">
      <span className="">
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
    </div>
  );
}

export default GithubProgress;
