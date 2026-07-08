---
icon: simple/mysql
---

## SQL Prerequisites for Data Pipelines (dbt & Airflow)

You don’t need to be an absolute SQL wizard to start building pipelines, but you do need a solid grasp of the fundamentals. Think of SQL as the foundation—if your queries are weak, your dbt models or data pipelines will just move broken data faster.

Here is exactly how much SQL you should learn before diving into dbt and Airflow, broken down by what is actually essential.

---

### 1. The "Must-Knows" (Learn these first)

You should be completely comfortable writing these without constantly googling the syntax:

- **Basic Querying & Filtering:** `SELECT`, `FROM`, `WHERE`, `DISTINCT`, `LIMIT`.
- **Aggregations:** `GROUP BY`, `HAVING`, and functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`.
- **Joining Tables:** Knowing the difference between `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`. _(Crucial for dbt, as you are constantly combining sources)._
- **Conditional Logic:** `CASE WHEN` statements (the SQL equivalent of if/else statements).
- **Common Functions:** Handling `NULL` values (`COALESCE`, `IFNULL`), string manipulation (`CONCAT`, `SUBSTR`), and basic date/time functions.

### 2. The "Pipeline Essentials" (Learn before dbt)

dbt heavily relies on modular SQL. Before you touch dbt, you definitely want to understand:

- **CTEs (Common Table Expressions):** Writing queries using the `WITH table_as (...)` syntax. dbt code relies almost entirely on CTEs rather than messy, nested subqueries because they make code readable.

### 3. The "Learn as You Go" (Advanced)

You don’t need to master these on day one, but you will naturally need them as your pipelines grow:

- **Window Functions:** `ROW_NUMBER()`, `RANK()`, `LEAD()`, `LAG()`. _(Incredibly useful for deduplicating data or calculating changes over time)._
- **Query Performance:** Understanding basic indexing, partitioning, and how to avoid massive, expensive table scans in data warehouses like Snowflake or BigQuery.

---

> 💡 **The Reality Check:** You can start learning **Airflow** with just basic coding skills because it focuses on moving data and scheduling. But for **dbt**, you will hit a wall very fast if you don't know Joins, Aggregations, and CTEs.

If you can confidently take two separate tables of raw data, join them, clean up the dates, and aggregate them into a clean summary table, you are 100% ready to start learning dbt and building pipelines.

## dbt
