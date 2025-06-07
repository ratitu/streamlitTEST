import ee
import streamlit as st
from google.oauth2 import service_account
def initialize_ee():
    service_account_info = st.secrets[streamlit-462218]
    credentials = service_account.Credentials.from_service_account_info(service_account_info)
    ee.Initialize(credentials)
initialize_ee()
