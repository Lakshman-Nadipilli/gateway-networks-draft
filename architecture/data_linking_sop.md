# SOP: Data Linking (Source of Truth)

## Goal
Establish a deterministic connection to the ISP planning and pricing data.

## Source
- Static JSON file located at `lib/data/plans.json`.
- This file acts as the bridge for data from the "previous website".

## Schema
Must follow the `ISP Plan Schema` defined in `gemini.md`.

## Update Procedure
1. Modify `lib/data/plans.json`.
2. Run `tools/validate_data.py` to ensure schema compliance.
