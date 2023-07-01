-- Implement your solution here
SELECT teams.team_id, teams.team_name,
    SUM(CASE WHEN team_id = host_team AND host_goals > guest_goals THEN 3 else 0 end) +
    SUM(CASE WHEN team_id = host_team AND host_goals = guest_goals THEN 1 else 0 end) +
    SUM(CASE WHEN team_id = guest_team AND host_goals < guest_goals THEN 3 else 0 end) +
    SUM(CASE WHEN team_id = guest_team AND host_goals = guest_goals THEN 1 else 0 end) AS num_points
FROM teams LEFT JOIN Matches
ON teams.team_id = matches.host_team OR teams.team_id = matches.guest_team
GROUP BY teams.team_id
ORDER BY num_points DESC, teams.team_id ASC