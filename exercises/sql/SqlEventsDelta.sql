-- Implement your solution here
SELECT
    e1.event_type,
    (e1.value - e2.value) AS value
FROM
    (
        SELECT
            event_type,
            value,
            ROW_NUMBER() OVER (
                PARTITION BY event_type
                ORDER BY
                    time DESC
                ) AS row_number
        FROM
            events
    ) AS e1
        JOIN (
        SELECT
            event_type,
            value,
            ROW_NUMBER() OVER (
                PARTITION BY event_type
                ORDER BY
                    time DESC
                ) AS row_number
        FROM
            events
    ) AS e2 ON e1.event_type = e2.event_type
WHERE
        e1.row_number = 1
  AND e2.row_number = 2
ORDER BY
    e1.event_type ASC;

