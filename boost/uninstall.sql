ALTER TABLE ONLY sdr_membership_role DROP CONSTRAINT member_status_fk;
ALTER TABLE ONLY sdr_address DROP CONSTRAINT sdr_address_student_id_fkey;
ALTER TABLE ONLY sdr_advisor DROP CONSTRAINT sdr_advisor_id_fkey;
ALTER TABLE ONLY sdr_deans_chancellors_lists DROP CONSTRAINT sdr_deans_chancellors_lists_member_id_fkey;
ALTER TABLE ONLY sdr_employments DROP CONSTRAINT sdr_employments_member_id_fkey;
ALTER TABLE ONLY sdr_gpa DROP CONSTRAINT sdr_gpa_member_id_fkey;
ALTER TABLE ONLY sdr_membership DROP CONSTRAINT sdr_membership_member_id_fkey;
ALTER TABLE ONLY sdr_membership DROP CONSTRAINT sdr_membership_organization_id_fkey;
ALTER TABLE ONLY sdr_membership_role DROP CONSTRAINT sdr_membership_role_membership_id_fkey;
ALTER TABLE ONLY sdr_membership DROP CONSTRAINT sdr_membership_term_fkey;
ALTER TABLE ONLY sdr_organization_application DROP CONSTRAINT sdr_organization_application_parent_fkey;
ALTER TABLE ONLY sdr_organization_application DROP CONSTRAINT sdr_organization_application_req_advisor_id_fkey;
ALTER TABLE ONLY sdr_organization_application DROP CONSTRAINT sdr_organization_application_req_pres_id_fkey;
ALTER TABLE ONLY sdr_organization_application DROP CONSTRAINT sdr_organization_application_term_fkey;
ALTER TABLE ONLY sdr_organization_instance DROP CONSTRAINT sdr_organization_instance_organization_id_fkey;
ALTER TABLE ONLY sdr_organization_instance DROP CONSTRAINT sdr_organization_instance_term_fkey;
ALTER TABLE ONLY sdr_organization_instance DROP CONSTRAINT sdr_organization_instance_type_fkey;
ALTER TABLE ONLY sdr_organization_profile DROP CONSTRAINT sdr_organization_profile_organization_id_fkey;
ALTER TABLE ONLY sdr_scholarship DROP CONSTRAINT sdr_scholarship_member_id_fkey;
ALTER TABLE ONLY sdr_student DROP CONSTRAINT sdr_student_id_fkey;
ALTER TABLE ONLY sdr_student_registration DROP CONSTRAINT sdr_student_registration_student_id_fkey;
ALTER TABLE ONLY sdr_student_registration DROP CONSTRAINT sdr_student_registration_term_fkey;
ALTER TABLE ONLY sdr_transcript_request DROP CONSTRAINT sdr_transcript_requests_member_id_fkey;

DROP VIEW sdr_organization_recent;
DROP VIEW sdr_organization_full;
DROP VIEW sdr_student_memberships;

DROP TABLE sdr_organization_uberadmin;
DROP TABLE sdr_activity_log;
DROP TABLE sdr_member;
DROP TABLE sdr_membership;
DROP TABLE sdr_membership_role;
DROP TABLE sdr_organization;
DROP TABLE sdr_organization_instance;
DROP TABLE sdr_organization_type;
DROP TABLE sdr_role;
DROP TABLE sdr_address;
DROP TABLE sdr_advisor;
DROP TABLE sdr_deans_chancellors_lists;
DROP TABLE sdr_employers;
DROP TABLE sdr_employments;
DROP TABLE sdr_gpa;
DROP TABLE sdr_ncaa;
DROP TABLE sdr_organization_application;
DROP TABLE sdr_organization_profile;
DROP TABLE sdr_scholarship;
DROP TABLE sdr_settings_scholarship_types;
DROP TABLE sdr_special_gpa;
DROP TABLE sdr_student;
DROP TABLE sdr_student_registration;
DROP TABLE sdr_term;
DROP TABLE sdr_transcript_request;
