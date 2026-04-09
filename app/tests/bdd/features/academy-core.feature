Feature: MarTech + AdTech Academy core learning flows
  As a learner
  I want module navigation, case discussion prompts, and checkpoint workflows to work reliably
  So that I can complete the curriculum and produce decision-quality outputs

  Scenario: Learner opens first module from homepage
    Given I am on the academy homepage
    When I open module 1
    Then I should see the module page with the Harvard-style case section

  Scenario: Learner marks a module complete and state persists
    Given I am on the industry map module page
    When I mark the module as complete
    Then progress should show one completed module even after reload

  Scenario: Learner submits a checkpoint quiz
    Given I am on the industry map module page
    When I submit the checkpoint quiz
    Then I should see a score and answer explanations

  Scenario: Learner saves and restores a case memo
    Given I am on the industry map module page
    When I write and save a case memo
    Then the memo should persist after page reload

  Scenario: Learner can complete onboarding and start module 1
    Given I am on the academy homepage
    When I open onboarding
    Then I should see module types and a call to start module 1
