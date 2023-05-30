const attestationService = new AttestationService();
const attestationRequest = attestationService.createAttestationRequest(userPhoneNumber);
attestationService.sendRequest(attestationRequest);
