import ee
import json
import streamlit as st
from google.oauth2 import service_account
from ee import oauth
import geemap
def ee_initialize(force_use_service_account=False):
    if force_use_service_account or "json_data" in st.secrets:
        json_credentials = st.secrets["json_data"]
        credentials_dict = json.loads(json_credentials)
        if 'client_email' not in credentials_dict:
            raise ValueError("Service account info is missing 'client_email' field.")
        credentials = service_account.Credentials.from_service_account_info(
            credentials_dict, scopes=oauth.SCOPES
        )
        ee.Initialize(credentials)
    else:
        ee.Initialize()
# Initialize GEE
ee_initialize(force_use_service_account=True)
# Streamlit app layout
st.title('GEE-API-Streamlit Integration')
# Create and display a map
Map = geemap.Map(center=[40, -100], zoom=4)
Map.add_basemap('SATELLITE')
Map.to_streamlit(height=300)
