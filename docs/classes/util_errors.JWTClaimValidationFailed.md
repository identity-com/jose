# Class: JWTClaimValidationFailed

[util/errors](../modules/util_errors.md).JWTClaimValidationFailed

An error subclass thrown when a JWT Claim Set member validation fails.

## Hierarchy

- [`JOSEError`](util_errors.JOSEError.md)

  ↳ **`JWTClaimValidationFailed`**

  ↳↳ [`JWTExpired`](util_errors.JWTExpired.md)

## Table of contents

### Constructors

- [constructor](util_errors.JWTClaimValidationFailed.md#constructor)

### Properties

- [claim](util_errors.JWTClaimValidationFailed.md#claim)
- [code](util_errors.JWTClaimValidationFailed.md#code)
- [reason](util_errors.JWTClaimValidationFailed.md#reason)
- [code](util_errors.JWTClaimValidationFailed.md#code)

## Constructors

### constructor

• **new JWTClaimValidationFailed**(`message`, `claim?`, `reason?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `claim` | `string` | `'unspecified'` |
| `reason` | `string` | `'unspecified'` |

#### Overrides

[JOSEError](util_errors.JOSEError.md).[constructor](util_errors.JOSEError.md#constructor)

#### Defined in

[util/errors.ts:45](https://github.com/panva/jose/blob/v3.14.3/src/util/errors.ts#L45)

## Properties

### claim

• **claim**: `string`

The Claim for which the validation failed.

#### Defined in

[util/errors.ts:38](https://github.com/panva/jose/blob/v3.14.3/src/util/errors.ts#L38)

___

### code

• **code**: `string`

A unique error code for the particular error subclass.

#### Overrides

[JOSEError](util_errors.JOSEError.md).[code](util_errors.JOSEError.md#code)

#### Defined in

[util/errors.ts:33](https://github.com/panva/jose/blob/v3.14.3/src/util/errors.ts#L33)

___

### reason

• **reason**: `string`

Reason code for the validation failure.

#### Defined in

[util/errors.ts:43](https://github.com/panva/jose/blob/v3.14.3/src/util/errors.ts#L43)

___

### code

▪ `Static` **code**: `string` = `'ERR_JWT_CLAIM_VALIDATION_FAILED'`

A unique error code for the particular error subclass.

#### Overrides

[JOSEError](util_errors.JOSEError.md).[code](util_errors.JOSEError.md#code)

#### Defined in

[util/errors.ts:31](https://github.com/panva/jose/blob/v3.14.3/src/util/errors.ts#L31)